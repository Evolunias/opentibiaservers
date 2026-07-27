import ThorniaFunServerKeywordPage, { generateMetadata } from './thornia-fun-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaFunServerKeywordPage />;
}
