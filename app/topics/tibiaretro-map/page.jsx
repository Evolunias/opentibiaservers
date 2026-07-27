import TibiaretroMapKeywordPage, { generateMetadata } from './tibiaretro-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroMapKeywordPage />;
}
