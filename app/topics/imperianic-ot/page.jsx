import ImperianicOtKeywordPage, { generateMetadata } from './imperianic-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicOtKeywordPage />;
}
