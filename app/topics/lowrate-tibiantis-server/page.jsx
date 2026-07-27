import LowrateTibiantisServerKeywordPage, { generateMetadata } from './lowrate-tibiantis-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiantisServerKeywordPage />;
}
