import RetroSaintsotServerKeywordPage, { generateMetadata } from './retro-saintsot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroSaintsotServerKeywordPage />;
}
