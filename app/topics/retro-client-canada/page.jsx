import RetroClientCanadaKeywordPage, { generateMetadata } from './retro-client-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroClientCanadaKeywordPage />;
}
