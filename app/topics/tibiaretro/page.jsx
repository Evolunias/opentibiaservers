import TibiaretroKeywordPage, { generateMetadata } from './tibiaretro';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroKeywordPage />;
}
