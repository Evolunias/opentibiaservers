import EvoNostaltherServerKeywordPage, { generateMetadata } from './evo-nostalther-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoNostaltherServerKeywordPage />;
}
