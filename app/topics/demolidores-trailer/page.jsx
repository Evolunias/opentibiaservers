import DemolidoresTrailerKeywordPage, { generateMetadata } from './demolidores-trailer';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresTrailerKeywordPage />;
}
