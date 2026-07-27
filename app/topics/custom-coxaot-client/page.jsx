import CustomCoxaotClientKeywordPage, { generateMetadata } from './custom-coxaot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCoxaotClientKeywordPage />;
}
