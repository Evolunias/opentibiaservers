import BestTibiaretroClientKeywordPage, { generateMetadata } from './best-tibiaretro-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiaretroClientKeywordPage />;
}
