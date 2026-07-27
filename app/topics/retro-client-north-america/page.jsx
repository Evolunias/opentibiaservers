import RetroClientNorthAmericaKeywordPage, { generateMetadata } from './retro-client-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroClientNorthAmericaKeywordPage />;
}
