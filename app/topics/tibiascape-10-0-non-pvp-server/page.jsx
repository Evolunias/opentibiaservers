import Tibiascape100NonPvpServerKeywordPage, { generateMetadata } from './tibiascape-10-0-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape100NonPvpServerKeywordPage />;
}
