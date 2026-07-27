import LuceraServerKeywordPage, { generateMetadata } from './lucera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LuceraServerKeywordPage />;
}
