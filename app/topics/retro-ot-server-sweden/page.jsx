import RetroOtServerSwedenKeywordPage, { generateMetadata } from './retro-ot-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroOtServerSwedenKeywordPage />;
}
