import OtlandBrazilKeywordPage, { generateMetadata } from './otland-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtlandBrazilKeywordPage />;
}
