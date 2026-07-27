import HighrateMistOfDeathServerKeywordPage, { generateMetadata } from './highrate-mist-of-death-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMistOfDeathServerKeywordPage />;
}
