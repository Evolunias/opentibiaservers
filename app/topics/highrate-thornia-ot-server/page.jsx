import HighrateThorniaOtServerKeywordPage, { generateMetadata } from './highrate-thornia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateThorniaOtServerKeywordPage />;
}
