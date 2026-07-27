import DemolidoresAlternativesKeywordPage, { generateMetadata } from './demolidores-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresAlternativesKeywordPage />;
}
