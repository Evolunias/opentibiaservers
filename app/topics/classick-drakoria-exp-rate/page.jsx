import ClassickDrakoriaExpRateKeywordPage, { generateMetadata } from './classick-drakoria-exp-rate';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassickDrakoriaExpRateKeywordPage />;
}
