import CustomThorniaClientKeywordPage, { generateMetadata } from './custom-thornia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomThorniaClientKeywordPage />;
}
