import OtlandServerGalaBrazilKeywordPage, { generateMetadata } from './otland-server-gala-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtlandServerGalaBrazilKeywordPage />;
}
