import CustomThorniaLoginKeywordPage, { generateMetadata } from './custom-thornia-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomThorniaLoginKeywordPage />;
}
