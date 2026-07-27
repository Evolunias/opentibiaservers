import Tibia80LowExpServerKeywordPage, { generateMetadata } from './tibia-8-0-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80LowExpServerKeywordPage />;
}
