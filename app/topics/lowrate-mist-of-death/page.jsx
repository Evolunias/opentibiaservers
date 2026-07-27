import LowrateMistOfDeathKeywordPage, { generateMetadata } from './lowrate-mist-of-death';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMistOfDeathKeywordPage />;
}
