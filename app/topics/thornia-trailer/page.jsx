import ThorniaTrailerKeywordPage, { generateMetadata } from './thornia-trailer';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaTrailerKeywordPage />;
}
