import LowExpThorniaServerKeywordPage, { generateMetadata } from './low-exp-thornia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpThorniaServerKeywordPage />;
}
