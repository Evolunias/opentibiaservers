import NepreniaRetroServerArgentinaKeywordPage, { generateMetadata } from './neprenia-retro-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaRetroServerArgentinaKeywordPage />;
}
