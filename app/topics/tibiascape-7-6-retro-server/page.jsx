import Tibiascape76RetroServerKeywordPage, { generateMetadata } from './tibiascape-7-6-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape76RetroServerKeywordPage />;
}
