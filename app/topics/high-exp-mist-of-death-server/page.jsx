import HighExpMistOfDeathServerKeywordPage, { generateMetadata } from './high-exp-mist-of-death-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpMistOfDeathServerKeywordPage />;
}
