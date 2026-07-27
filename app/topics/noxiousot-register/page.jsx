import NoxiousotRegisterKeywordPage, { generateMetadata } from './noxiousot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoxiousotRegisterKeywordPage />;
}
