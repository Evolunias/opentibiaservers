import RetroMiracleServerKeywordPage, { generateMetadata } from './retro-miracle-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroMiracleServerKeywordPage />;
}
