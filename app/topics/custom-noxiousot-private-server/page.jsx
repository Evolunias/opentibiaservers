import CustomNoxiousotPrivateServerKeywordPage, { generateMetadata } from './custom-noxiousot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNoxiousotPrivateServerKeywordPage />;
}
