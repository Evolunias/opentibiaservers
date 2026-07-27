import Tibia80LowExpClientKeywordPage, { generateMetadata } from './tibia-8-0-low-exp-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80LowExpClientKeywordPage />;
}
