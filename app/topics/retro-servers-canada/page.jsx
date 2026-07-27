import RetroServersCanadaKeywordPage, { generateMetadata } from './retro-servers-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroServersCanadaKeywordPage />;
}
