import CustomOriginaltibiaRegisterKeywordPage, { generateMetadata } from './custom-originaltibia-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOriginaltibiaRegisterKeywordPage />;
}
