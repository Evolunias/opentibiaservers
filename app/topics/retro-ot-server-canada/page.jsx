import RetroOtServerCanadaKeywordPage, { generateMetadata } from './retro-ot-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroOtServerCanadaKeywordPage />;
}
