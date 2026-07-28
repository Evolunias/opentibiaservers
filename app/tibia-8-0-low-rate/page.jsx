import Tibia80LowRatePage, { generateMetadata } from './tibia-8-0-low-rate';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80LowRatePage />;
}
