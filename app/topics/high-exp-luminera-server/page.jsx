import HighExpLumineraServerKeywordPage, { generateMetadata } from './high-exp-luminera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpLumineraServerKeywordPage />;
}
