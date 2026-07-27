import TibiaretroResetKeywordPage, { generateMetadata } from './tibiaretro-reset';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroResetKeywordPage />;
}
