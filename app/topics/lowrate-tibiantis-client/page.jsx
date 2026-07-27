import LowrateTibiantisClientKeywordPage, { generateMetadata } from './lowrate-tibiantis-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiantisClientKeywordPage />;
}
