import LowExpNostaltherServerKeywordPage, { generateMetadata } from './low-exp-nostalther-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpNostaltherServerKeywordPage />;
}
