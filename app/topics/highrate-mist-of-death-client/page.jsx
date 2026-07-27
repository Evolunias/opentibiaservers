import HighrateMistOfDeathClientKeywordPage, { generateMetadata } from './highrate-mist-of-death-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMistOfDeathClientKeywordPage />;
}
