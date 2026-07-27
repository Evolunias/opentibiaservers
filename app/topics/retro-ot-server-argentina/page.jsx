import RetroOtServerArgentinaKeywordPage, { generateMetadata } from './retro-ot-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroOtServerArgentinaKeywordPage />;
}
