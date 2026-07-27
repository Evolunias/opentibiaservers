import HighrateMistOfDeathKeywordPage, { generateMetadata } from './highrate-mist-of-death';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMistOfDeathKeywordPage />;
}
