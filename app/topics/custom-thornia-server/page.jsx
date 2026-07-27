import CustomThorniaServerKeywordPage, { generateMetadata } from './custom-thornia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomThorniaServerKeywordPage />;
}
