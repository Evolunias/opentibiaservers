import HighExpThorniaServerKeywordPage, { generateMetadata } from './high-exp-thornia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpThorniaServerKeywordPage />;
}
