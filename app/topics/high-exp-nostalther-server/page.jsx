import HighExpNostaltherServerKeywordPage, { generateMetadata } from './high-exp-nostalther-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpNostaltherServerKeywordPage />;
}
