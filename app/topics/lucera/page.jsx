import LuceraKeywordPage, { generateMetadata } from './lucera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LuceraKeywordPage />;
}
