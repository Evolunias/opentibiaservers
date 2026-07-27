import LuceraWorldKeywordPage, { generateMetadata } from './lucera-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LuceraWorldKeywordPage />;
}
