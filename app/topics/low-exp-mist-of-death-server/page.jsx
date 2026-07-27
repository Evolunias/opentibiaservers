import LowExpMistOfDeathServerKeywordPage, { generateMetadata } from './low-exp-mist-of-death-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpMistOfDeathServerKeywordPage />;
}
