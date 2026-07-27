import RetroServersNorthAmericaKeywordPage, { generateMetadata } from './retro-servers-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroServersNorthAmericaKeywordPage />;
}
