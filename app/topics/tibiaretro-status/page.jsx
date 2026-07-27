import TibiaretroStatusKeywordPage, { generateMetadata } from './tibiaretro-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroStatusKeywordPage />;
}
